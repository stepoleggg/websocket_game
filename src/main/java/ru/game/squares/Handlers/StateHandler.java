package ru.game.squares.Handlers;

import org.springframework.security.core.parameters.P;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

public class StateHandler {
    public static Map state = new HashMap();

    public static Map<String, String> sessions = new HashMap();

    public static void addSession(String id, String name){
        if(!sessions.containsKey(id)){
            sessions.put(id, name);
            System.out.println(name+" joined the game");
        }
    }

    public static void updateState(Map value){
        state.put(value.get("name"), value);
    }

    public static void deletePlayer(String id){
        String name = sessions.get(id);
        sessions.remove(id);
        state.remove(name);
        System.out.println(name+" left the game");
    }
}
