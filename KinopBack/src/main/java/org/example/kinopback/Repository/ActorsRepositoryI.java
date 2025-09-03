package org.example.kinopback.Repository;

import jakarta.transaction.Transactional;
import org.example.kinopback.Entity.Actor;
import org.example.kinopback.Entity.Film;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ActorsRepositoryI extends JpaRepository<Actor, Integer> {

  public List<Actor> getActorsByFilms(List<Film> films);

  @Transactional
  public void deleteAllByFilms(List<Film> films);
}
