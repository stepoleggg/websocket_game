package ru.game.squares.Handlers;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.scheduling.concurrent.ConcurrentTaskScheduler;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CopyOnWriteArrayList;

@Component
public class SocketHandler extends TextWebSocketHandler {

    public static List<WebSocketSession> sessions = new CopyOnWriteArrayList<>();

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message)
            throws InterruptedException {
        //получение
        Map value = new Gson().fromJson(message.getPayload(), Map.class);
        StateHandler.updateState(value);
        StateHandler.addSession(session.getId(), (String) value.get("name"));

    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        sessions.add(session);
    }

    @Bean
    public TaskScheduler taskScheduler() {
        return new ConcurrentTaskScheduler();
    }

    @Scheduled(fixedRate = 20)
    public void sendEveryTime() throws IOException {
        for(WebSocketSession webSocketSession : sessions) {
            if(webSocketSession.isOpen()){

                //отправка
                Gson gson = new Gson();
                Type gsonType = new TypeToken<HashMap>(){}.getType();
                String gsonString = gson.toJson(StateHandler.state, gsonType);
                synchronized(webSocketSession){
                    webSocketSession.sendMessage(new TextMessage(gsonString));
                }

            }else{

                //выход
                sessions.remove(webSocketSession);
                StateHandler.deletePlayer(webSocketSession.getId());

            }
        }
    }
}