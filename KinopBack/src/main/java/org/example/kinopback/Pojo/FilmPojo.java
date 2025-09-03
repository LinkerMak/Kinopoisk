package org.example.kinopback.Pojo;

import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.example.kinopback.Entity.Actor;
import org.example.kinopback.Entity.Film;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@ToString
public class FilmPojo {

  private long id;
  private String description;
  private String name;
  private String date_release;
  private int Price;
  private int rating;
  private String genre;
  private String video;
  private String image;

  public static FilmPojo fromEntity(Film film) {
    FilmPojo pojo = new FilmPojo();
    pojo.setId(film.getId());
    pojo.setDescription(film.getDescription());
    pojo.setName(film.getName());
    pojo.setGenre(film.getGenre());
    pojo.setImage(film.getImage());
    pojo.setVideo(film.getVideo());
    pojo.setDate_release(film.getDate_release());
    pojo.setPrice(film.getPrice());
    pojo.setRating(film.getRating());

    return pojo;
  }

  public static Film toEntity(FilmPojo film) {
    Film pojo = new Film();

    pojo.setId(film.getId());
    pojo.setDescription(film.getDescription());
    pojo.setName(film.getName());
    pojo.setGenre(film.getGenre());
    pojo.setImage(film.getImage());
    pojo.setVideo(film.getVideo());
    pojo.setDate_release(film.getDate_release());
    pojo.setPrice(film.getPrice());
    pojo.setRating(film.getRating());

    return pojo;
  }
}
