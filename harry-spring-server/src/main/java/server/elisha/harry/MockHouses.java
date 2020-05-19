package server.elisha.harry;

import org.springframework.stereotype.Service;
import server.elisha.harry.Entity.House;
import server.elisha.harry.Entity.Wizard;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class MockHouses {

    public List<House> houses;

    public void initHouses() {
        houses = new ArrayList<>();
        houses.add(new House(1, "Gryffindor", "../assets/house_images/Gryffindor_House_Pride_Collections.svg"));
        houses.add(new House(2, "Hufflepuff", "../assets/house_images/Hufflepuff_House_Pride_Collection_Symbol.svg"));
        houses.add(new House(3, "Ravenclaw", "../assets/house_images/Ravenclaw_Pride_Collection_Symbol.svg"));
        houses.add(new House(4, "Slytherin", "../assets/house_images/Slytherin_House_Pride_Collection_V2.svg"));
    }

    public List<House> getHouses() {
        return houses;
    }
}
