package server.elisha.harry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    }

    @GetMapping(path = "/houses")
    public String[] getHouses() {
        return mockHouses.houseJsons;
    }

    @GetMapping(path = "/wizards")
    public String[] getWizards() {
        return mockWizards.wizardJsons;
    }

}
