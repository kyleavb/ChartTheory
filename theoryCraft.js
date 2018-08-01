function theoryCraft(iteration, hitMod, atkMod, atkDie, monAc){
    var crafted = {
      attacks : []
    }
    var totalDamage = 0;
    var totalHit = 0;
    var crit = 0
    for(let i = 0; i < iteration; i++){
      var natRoll = roll(20);
      var hit = hitMod ? natRoll + hitMod : natRoll;
      var damage = natRoll === 20 ? roll(atkDie) * 2 + atkMod : roll(atkDie) + atkMod
      natRoll === 20 ? crit += 1 : crit
      if(monAc){ //if we have a monster AC target
        if(hit > monAc && natRoll !== 1 || natRoll === 20){//hit
          totalDamage += damage;
          totalHit += 1;
        }else{
          damage = 0
        }
      }else{ //No monster ac
        totalDamage += damage;
      }
      crafted.attacks[i] = {
        natRoll,
        hitMod,
        totRoll: (natRoll + hitMod),
        damage : damage
      }
    }
    crafted.avgDmg = (totalDamage / iteration).toFixed(2);
    crafted.avgHit = ((totalHit / iteration).toFixed(2) * 100) + '%';
    crafted.avgCrit = ((crit / iteration).toFixed(2)  * 100) + '%';
    crafted.totalDamage = totalDamage;
    crafted.totalHit = totalHit
    crafted.totalMiss = iteration - totalHit;
    return crafted
  }
  
  function roll(die){
    return Math.ceil(Math.random() * die)
  }