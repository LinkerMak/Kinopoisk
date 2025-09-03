package org.example.kinopback.Pojo;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.example.kinopback.Entity.Actor;
import org.example.kinopback.Entity.Film;

@Getter
@Setter
@ToString
public class ActorPojo {

  private long id;
  private String biography;
  private String name;
  private String birthdate;
  private String image;
  public static ActorPojo fromEntity(Actor actor) {
    ActorPojo pojo = new ActorPojo();
    pojo.setId(actor.getId());
    pojo.setBiography(actor.getBiography());
    pojo.setName(actor.getName());
    pojo.setBirthdate(actor.getBirthdate());
    pojo.setImage(actor.getImage());

    return pojo;
  }
  public static Actor toEntity(ActorPojo actor) {
    Actor pojo = new Actor();
    pojo.setId(actor.getId());
    pojo.setBiography(actor.getBiography());
    pojo.setName(actor.getName());
    pojo.setBirthdate(actor.getBirthdate());
    pojo.setImage(actor.getImage());

    return pojo;
  }
}
