package org.example.kinopback.Repository;

import org.example.kinopback.Entity.Actor;
import org.example.kinopback.Entity.Film;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface FilmsRepositoryI extends JpaRepository<Film, Integer> {
  public List<Film> getFilmsByActors(List<Actor> actors);


}
