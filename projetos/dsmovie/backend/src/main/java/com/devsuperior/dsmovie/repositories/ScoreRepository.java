package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.ettities.Score;
import com.devsuperior.dsmovie.ettities.ScorePK;

public interface ScoreRepository extends JpaRepository< Score , ScorePK> {
	

}
