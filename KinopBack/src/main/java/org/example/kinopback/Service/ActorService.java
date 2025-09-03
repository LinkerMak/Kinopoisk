package org.example.kinopback.Service;

import org.example.kinopback.Entity.Actor;
import org.example.kinopback.Entity.Film;
import org.example.kinopback.Pojo.ActorPojo;
import org.example.kinopback.Pojo.FilmPojo;
import org.example.kinopback.Repository.ActorsRepositoryI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ActorService {

  @Autowired
  private ActorsRepositoryI actorsRepository;

  public List<ActorPojo> getAllActors() {
    return actorsRepository.findAll().stream().map(ActorPojo::fromEntity).toList();
  }

  public ActorPojo createOrUpdate(Actor actor) {
    return ActorPojo.fromEntity(actorsRepository.save(actor));
  }

  public ActorPojo getActorById(int i){
    return ActorPojo.fromEntity(actorsRepository.findById(i).get());
  }


  public List<ActorPojo> getActorsByFilm(List<Film> film){
    return actorsRepository.getActorsByFilms(film).stream().map(ActorPojo::fromEntity).toList();
  }

  public void deleteActor(Actor actor){

    actorsRepository.deleteById((int) actor.getId());

  }
}
