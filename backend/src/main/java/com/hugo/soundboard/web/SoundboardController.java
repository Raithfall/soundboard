package com.hugo.soundboard.web;

import com.hugo.soundboard.domain.Soundboard;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController()
@RequestMapping("/soundboard")
public class SoundboardController {

  @RequestMapping(value = "/all", method = RequestMethod.GET)
  public List<Soundboard> findAll() {
    System.out.println("get All Soundboards");
    return new ArrayList<>();
  }

  @ResponseBody
  @RequestMapping(value = "/{id}", method = RequestMethod.GET)
  public Soundboard findOne(@PathVariable("id") Long id) {
    Soundboard mysoundboard = new Soundboard();
    mysoundboard.setName("mon son de ouf");
    return mysoundboard;
  }

  @RequestMapping(method = RequestMethod.POST)
  @ResponseStatus(HttpStatus.CREATED)
  public void create(@RequestBody Soundboard soundboard) {
    System.out.println("You create a new soundboard " + soundboard.getName());
  }

  @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
  @ResponseStatus(HttpStatus.OK)
  public void update(@PathVariable( "id" ) Long id, @RequestBody Soundboard soundboard) {
    System.out.println("new datas for soundboard " + id);
  }

  @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
  @ResponseStatus(HttpStatus.OK)
  public void delete(@PathVariable("id") Long id) {
    System.out.println("Soundboard deleted : " + id);
  }
}
