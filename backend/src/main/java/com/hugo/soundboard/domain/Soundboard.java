package com.hugo.soundboard.domain;

import java.util.List;
import java.util.UUID;

public class Soundboard {
  private UUID id;
  private String name;
  private List<Sound> sounds;

  public UUID getId() {
    return id;
  }

  public void setId(UUID id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public List<Sound> getSounds() {
    return sounds;
  }

  public void setSounds(List<Sound> sounds) {
    this.sounds = sounds;
  }
}
