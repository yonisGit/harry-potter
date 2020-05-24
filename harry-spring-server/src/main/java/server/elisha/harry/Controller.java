package server.elisha.harry;

import org.springframework.web.bind.annotation.*;
import server.elisha.harry.entity.House;
import server.elisha.harry.entity.Spell;
import server.elisha.harry.entity.Wizard;
import server.elisha.harry.mock.MockHouses;
import server.elisha.harry.mock.MockSpells;
import server.elisha.harry.mock.MockWizards;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping(path = "/api")
public class Controller {

    final
    MockWizards mockWizards;
    final
    MockHouses mockHouses;
    final
    MockSpells mockSpells;


    public Controller(MockWizards mockWizards, MockHouses mockHouses, MockSpells mockSpells) {
        this.mockWizards = mockWizards;
        this.mockHouses = mockHouses;
        this.mockSpells = mockSpells;
        mockSpells.initSpells();
        mockHouses.initHouses();
        mockWizards.initWizards();
    }

    @GetMapping(path = "/spells")
    public List<Spell> getSpells() {
        return mockSpells.getSpells();
    }

    @DeleteMapping(path = "/spells/{id}")
    public void deleteSpell(@PathVariable int id) {
        mockSpells.deleteSpell(id);
    }

    @PutMapping(path = "/spells")
    public void editSpell(@RequestBody Spell spell) {
        mockSpells.editSpell(spell);
    }

    @PostMapping(path = "/spells")
    public void addSpell(@RequestBody String spell) {
        mockSpells.addSpell(spell);
    }

    @GetMapping(path = "/houses")
    public List<House> getHouses() {
        return mockHouses.getHouses();
    }

    @GetMapping(path = "/wizards")
    public List<Wizard> getWizards() {
        return mockWizards.getWizards();
    }

    @GetMapping(path = "/wizards/{houseId}")
    public List<Wizard> getWizards(@PathVariable int houseId) {
        return mockWizards
                .getWizards()
                .stream()
                .filter(w -> w.getHouseId() == houseId)
                .collect(Collectors.toList());
    }

    @PostMapping(path = "/wizards")
    public void addWizard(@RequestBody Wizard newWizard) {
        mockWizards.addWizards(newWizard);
    }

    @PutMapping(path = "/wizards")
    public void editWizard(@RequestBody Wizard wizard) {
        mockWizards.editWizard(wizard);
    }

    @DeleteMapping(path = "/wizards/{id}")
    public void deleteWizard(@PathVariable int id) {
        mockWizards.deleteWizard(id);
    }
}
