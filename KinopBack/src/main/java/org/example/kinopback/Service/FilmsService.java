package org.example.kinopback.Service;

import lombok.AllArgsConstructor;
import org.example.kinopback.Entity.Actor;
import org.example.kinopback.Entity.Film;
import org.example.kinopback.Pojo.ActorPojo;
import org.example.kinopback.Pojo.FilmPojo;
import org.example.kinopback.Repository.ActorsRepositoryI;
import org.example.kinopback.Repository.FilmsRepositoryI;
import org.example.kinopback.Repository.NewsRepositoryI;
import org.example.kinopback.Repository.ReviewsRepositoryI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class FilmsService {

  @Autowired
  private NewsRepositoryI newsRepository;
  @Autowired
  private ReviewsRepositoryI reviewsRepository;
  @Autowired
  private FilmsRepositoryI filmsRepository;

  @Autowired
  private ActorsRepositoryI actorsRepositoryI;
  public FilmPojo getFilmById(int i){
    return FilmPojo.fromEntity(filmsRepository.findById(i).get());
  }
  public List<FilmPojo> getAllFilms() {
    return filmsRepository.findAll().stream().map(FilmPojo::fromEntity).toList();
  }

  public FilmPojo createOrUpdate(Film film) {
    if(film.getId() != 0 && film.getActors() == null) {
      List<Film> films = new ArrayList<>();
      films.add(film);
      List<Actor> actors = actorsRepositoryI.getActorsByFilms(films);
      film.setActors(actors);
    }
    return FilmPojo.fromEntity(filmsRepository.save(film));
  }

  public FilmPojo addActorForFilm(Film film, Actor actor) {
    List<Film> films = new ArrayList<>();
    films.add(film);

    List<Actor> actors = actorsRepositoryI.getActorsByFilms(films);
    actors.add(actor);
    film.setActors(actors);

    return FilmPojo.fromEntity(filmsRepository.save(film));
  }

  public List<FilmPojo> getFilmsByActors(List<Actor> actors) {
    return filmsRepository.getFilmsByActors(actors).stream().map(FilmPojo::fromEntity).toList();
  }

  public List<Film> getFilmsByActorsWithOriginal(List<Actor> actors) {
    return filmsRepository.getFilmsByActors(actors);
  }

  public void deleteFilm(Film film){
    filmsRepository.deleteById((int) film.getId());
/*
    actorsRepositoryI.deleteAllByFilms((List<Film>) film);
*/
    reviewsRepository.deleteAllByFilm(film);
    newsRepository.getAllByFilm(film);
  }
}
