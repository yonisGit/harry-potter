package server.elisha.harry.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
public class Wizard {
    String name;
    int age;
    String image;
    List spells;
    int house;

    public Wizard(String name, int age, String image, List spells, int house) {
        this.name = name;
        this.age = age;
        this.image = image;
        this.spells = spells;
        this.house = house;
    }



}
