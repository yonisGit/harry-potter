package server.elisha.harry.mock;

import org.springframework.stereotype.Service;
import server.elisha.harry.entity.Wizard;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class MockWizards {

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
        Wizard wizard = wizards.stream()
                .filter(w -> w.getId() == newWizard.getId())
                .collect(Collectors.toList())
                .get(0);
        wizards.set(wizards.indexOf(wizard), newWizard);
    }

    public void addWizard(Wizard newWizard) {
        wizards.add(newWizard);
    }

    public void deleteWizard(int wizardId) {
        wizards.removeIf(wizard -> wizard.getId() == wizardId);
    }
}
