package server.elisha.harry.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class Wizard {
    int id;
    String name;
    int age;
    String image;
    List spells;
    int house;
}
