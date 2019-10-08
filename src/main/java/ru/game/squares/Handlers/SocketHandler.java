package ru.game.squares.Handlers;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
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

    List<WebSocketSession> sessions = new CopyOnWriteArrayList<>();

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message)
            throws InterruptedException, IOException {

        for(WebSocketSession webSocketSession : sessions) {
            if(webSocketSession.isOpen()){

                //получение
                Map value = new Gson().fromJson(message.getPayload(), Map.class);
                StateHandler.updateState(value);
                Gson gson = new Gson();
                Type gsonType = new TypeToken<HashMap>(){}.getType();

                //отправка
                String gsonString = gson.toJson(StateHandler.state, gsonType);
                synchronized(webSocketSession){
                    StateHandler.addSession(webSocketSession.getId(), (String) value.get("name"));
                    webSocketSession.sendMessage(new TextMessage(gsonString));
                }

            }else{
                //выход
                sessions.remove(webSocketSession);
                StateHandler.deletePlayer(webSocketSession.getId());
            }
        }
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        //the messages will be broadcasted to all users.
        sessions.add(session);
    }
}