package server.elisha.harry.mock;

import org.springframework.stereotype.Service;
import server.elisha.harry.entity.Spell;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.atomic.AtomicReference;

import static java.util.Objects.nonNull;

@Service
public class MockSpells {
    public List<Spell> spells;

    public void initSpells() {
        spells = new ArrayList<>();
        Spell[] spellArr = {
                new Spell(1, "Alohomora"),
                new Spell(2, "Arresto Momentum"),
                new Spell(3, "Avada Kedavra"),
                new Spell(4, "Expecto Patronum"),
                new Spell(5, "Expelliarmus"),
                new Spell(6, "Lumos")
        };
        spells.addAll(Arrays.asList(spellArr));
    }

    public List<Spell> getSpells() {
        return spells;
    }

    public void addSpell(Spell spell) {
        spells.add(spell);
    }

    public void deleteSpell(String id) {
        spells.removeIf(spell -> spell.getId() == Integer.parseInt(id));
    }

    public void deleteSpells(Spell spell) {
        spells.remove(spell);
    }

    public void editSpell(Spell newSpell) {
        spells.removeIf(spell -> spell.getId() == newSpell.getId());
        spells.add(newSpell);
    }
}
