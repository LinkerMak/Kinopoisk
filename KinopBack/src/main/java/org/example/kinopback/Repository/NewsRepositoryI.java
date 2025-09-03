package org.example.kinopback.Repository;

import jakarta.transaction.Transactional;
import org.example.kinopback.Entity.Film;
import org.example.kinopback.Entity.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NewsRepositoryI extends JpaRepository<News, Integer> {

  public List<News> getAllByFilm(Film films);

  @Transactional
  public void deleteAllByFilm(Film film);

}
