import { Injectable, NotFoundException } from "@nestjs/common";
import { Player } from "./entities/player.entity";

@Injectable()
export class PlayersService {
  private players: Player[] = [];

  getAll(): Player[] {
    return this.players;
  }

  getOne(year:string): Player {
    const player = this.players.find(player => player.year === year);
    if (!player) {
      throw new NotFoundException(`Player with year ${year} not found.`)
    }
    return player;
  }
}
