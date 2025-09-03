package org.example.kinopback.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Getter
@Setter
@Table(name = "actors", schema = "kinop")
@Entity
@ToString
public class Actor {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id_actor")
  private long id;
  @Column(name = "biography")
  private String biography;
  @Column(name = "name")
  private String name;
  @Column(name = "birthdate")
  private String birthdate;

  @Column(name = "image")
  private String image;

  @ManyToMany(fetch = FetchType.LAZY,
    cascade = {
      CascadeType.PERSIST,
      CascadeType.MERGE
    },
    mappedBy = "actors")
  private List<Film> films;

}
