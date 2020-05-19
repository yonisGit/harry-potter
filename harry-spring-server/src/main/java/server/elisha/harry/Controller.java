package server.elisha.harry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import server.elisha.harry.Entity.House;
import server.elisha.harry.Entity.Wizard;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(path = "/harry-potter")
public class Controller {

    final
    MockWizards mockWizards;
    final
    MockHouses mockHouses;

    public Controller(MockWizards mockWizards, MockHouses mockHouses) {
        this.mockWizards = mockWizards;
        this.mockHouses = mockHouses;
        mockHouses.initHouses();
        mockWizards.initWizards();
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
