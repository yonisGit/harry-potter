package server.elisha.harry;

import org.springframework.web.bind.annotation.*;
import server.elisha.harry.entity.House;
import server.elisha.harry.entity.Spell;
import server.elisha.harry.entity.Wizard;
import server.elisha.harry.mock.MockHouses;
import server.elisha.harry.mock.MockSpells;
import server.elisha.harry.mock.MockWizards;

import java.util.List;

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
    public void deleteSpell(@PathVariable String id) {
        System.out.println("this is : " + id);
        mockSpells.deleteSpell(id);
    }

    @PostMapping(path = "/spells")
    public void addSpell(@RequestBody Spell spell) {
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

    @PostMapping(path = "/wizards")
    public void editWizard(@RequestBody Wizard newWizard) {
        mockWizards.editWizard(newWizard);
    }

}
