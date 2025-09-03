package org.example.kinopback.Repository;

import jakarta.transaction.Transactional;
import org.example.kinopback.Entity.Film;
import org.example.kinopback.Entity.Reviews;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewsRepositoryI extends JpaRepository<Reviews, Integer> {
  public List<Reviews> getAllByFilm(Film film);

  @Transactional
  public void deleteAllByFilm(Film film);

}
