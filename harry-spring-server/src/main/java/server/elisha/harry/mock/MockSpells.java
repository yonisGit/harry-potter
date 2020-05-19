package server.elisha.harry.mock;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class MockSpells {
    public List<String> spells;

    public void initSpells() {
        spells = new ArrayList<>();
        String[] spellArr = {"Alohomora", "Arresto Momentum", "Avada Kedavra",
                "Expecto Patronum", "Expelliarmus", "Lumos"};
        spells.addAll(Arrays.asList(spellArr));
    }

    public List<String> getSpells() {
        return spells;
    }
}
