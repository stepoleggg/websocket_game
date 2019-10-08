package ru.game.squares.Handlers;

import org.springframework.security.core.parameters.P;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

public class StateHandler {
    public static Map state = new HashMap();

    public static void updateState(Map value){
        state.put(value.get("name"), value);
    }

    public static void deletePlayer(Map value){
        state.remove(value.get("name"));
    }
}
