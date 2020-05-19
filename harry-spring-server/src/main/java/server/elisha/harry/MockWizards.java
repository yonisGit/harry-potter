package server.elisha.harry;

import org.springframework.stereotype.Service;
import server.elisha.harry.Entity.Wizard;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

@Service
public class MockWizards {
    public String[] wizardJsons =
            {
                    "{name:'Harry Potter',age:25,image:'../assets/wizard_images/gryffindor/harry.jpg',spells:['Alohomora','Arresto Momentum','Avada Kedavra','Expecto Patronum','Expelliarmus','Lumos'],house:1}",
                    "{name:'Hermione Granger',age:25,image:'../assets/wizard_images/gryffindor/hermione.jpg',spells:['Alohomora','Arresto Momentum','Expecto Patronum','Expelliarmus'],house:1}",
                    "{name:'Ron Weasly',age:25,image:'../assets/wizard_images/gryffindor/ron.jpg',spells:['Alohomora','Lumos'],house:1}",
                    "{name:'Cedric Diggory',age:28,image:'../assets/wizard_images/hufflepuff/diggory.png',spells:['Alohomora','Expelliarmus','Lumos'],house:2}",
                    "{name:'Leanne',age:21,image:'../assets/wizard_images/hufflepuff/leanne.png',spells:['Alohomora'],house:2}",
                    "{name:'Nymphadora',age:30,image:'../assets/wizard_images/hufflepuff/nymphadora.jpg',spells:['Alohomora','Avada Kedavra','Expecto Patronum','Expelliarmus','Lumos'],house:2}",
                    "{name:'Cho Chang',age:25,image:'../assets/wizard_images/ravenclaw/cho.jpg',spells:['Alohomora','Lumos'],house:3 }",
                    "{name:'Luna Hababuna',age:21,image:'../assets/wizard_images/ravenclaw/luna.jpg',spells:['Alohomora','Arresto Momentum'], house:3}",
                    "{name:'Sybill Hameshugaat',age:41,image:'../assets/wizard_images/ravenclaw/sybill.jpg', spells:['Alohomora','Arresto Momentum','Expelliarmus','Lumos'],house:3}",
                    "{name:'Draco Malfoy',age:25,image:'../assets/wizard_images/slytherin/draco.png',spells:['Alohomora','Arresto Momentum','Expelliarmus','Lumos'],house:4}",
                    "{name:'Bellatrix Lastrange',age:34,image:'../assets/wizard_images/slytherin/bellatrix.png',spells:['Alohomora','Expecto Patronum','Expelliarmus','Lumos'],house:4}",
                    "{name:'Severus Snape',age:43,image:'../assets/wizard_images/slytherin/snape.jpg',spells:['Alohomora','Arresto Momentum','Avada Kedavra','Expecto Patronum','Expelliarmus'],house:4}"
            };

    public List<Wizard> wizards;

    public void initWizards() {
        String[] s = {"Alohomora", "Arresto Momentum", "Avada Kedavra", "Expecto Patronum", "Expelliarmus", "Lumos"};
        ArrayList<String> spells = new ArrayList<>();
        spells.addAll(Arrays.asList(s));
        wizards = new ArrayList<>();
        wizards.add(new Wizard(1, "Harry Potter", 25, "../assets/wizard_images/gryffindor/harry.jpg", spells, 1));
        wizards.add(new Wizard(2, "Hermione Granger", 25, "../assets/wizard_images/gryffindor/hermione.jpg", spells, 1));
        wizards.add(new Wizard(3, "Ron Weasly", 25, "../assets/wizard_images/gryffindor/ron.jpg", spells, 1));
        wizards.add(new Wizard(4, "Cedric Diggory", 28, "../assets/wizard_images/hufflepuff/diggory.png", spells, 2));
        wizards.add(new Wizard(5, "Leanne", 21, "../assets/wizard_images/hufflepuff/leanne.png", spells, 2));
        wizards.add(new Wizard(6, "Nymphadora", 30, "../assets/wizard_images/hufflepuff/nymphadora.jpg", spells, 2));
        wizards.add(new Wizard(7, "Cho Chang", 25, "../assets/wizard_images/ravenclaw/cho.jpg", spells, 3));
        wizards.add(new Wizard(8, "Luna Hababuna", 21, "../assets/wizard_images/ravenclaw/luna.jpg", spells, 3));
        wizards.add(new Wizard(9, "Sybill Hameshugaat", 41, "../assets/wizard_images/ravenclaw/sybill.jpg", spells, 3));
        wizards.add(new Wizard(10, "Draco Malfoy", 25, "../assets/wizard_images/slytherin/draco.png", spells, 4));
        wizards.add(new Wizard(11, "Bellatrix Lastrange", 34, "../assets/wizard_images/slytherin/bellatrix.png", spells, 4));
        wizards.add(new Wizard(12, "Severus Snape", 43, "../assets/wizard_images/slytherin/snape.jpg", spells, 4));
    }

    public List<Wizard> getWizards() {
        return wizards;
    }

    public void editWizard(Wizard newWizard) {
        wizards.removeIf(wizard -> wizard.getId() == newWizard.getId());
        wizards.add(newWizard);
    }

}
