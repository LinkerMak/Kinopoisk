package org.example.kinopback.Entity;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Getter
@Setter
@Entity
@ToString
@Table(name = "films",schema = "kinop")
public class Film {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id_film")
  private long id;

  @Column(name = "description")
  private String description;

  @Column(name = "name")
  private String name;

  @Column(name = "date_release")
  private String date_release;

  @Column(name = "price")
  private int Price;

  @Column(name = "rating")
  private int rating;

  @Column(name = "genre")
  private String genre;

  @Column(name = "video")
  private String video;

  @Column(name = "image")
  private String image;

  @ManyToMany(fetch = FetchType.LAZY)
  @JoinTable(name = "actors_films",schema = "kinop",
    joinColumns = { @JoinColumn(name = "film_id") },
    inverseJoinColumns = { @JoinColumn(name = "actor_id") })
  private List<Actor> actors;


  @OneToMany(mappedBy = "film", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
  private List<News> news;

  @OneToMany(mappedBy = "film", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
  private List<Reviews> reviews;

}
