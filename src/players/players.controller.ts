import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { PlayersService } from "./players.service";
import { Player } from "./entities/player.entity";
import * as fs from "fs";

@Controller('players')
export class PlayersController {
  constructor(private readonly  playerService: PlayersService) {

  }
  @Get()
  getAll(): Player[] {
    return this.playerService.getAll();
  }

  @Get('search')
  search(@Query('name') searchingName: string) {
    return `We are searching for a player with a name: ${searchingName}`;
  }

  @Get(':year')
  getOne(@Param('year') year: string) {
    const rawData = fs.readFileSync(`src/data/batters/${year}.json`);
    const data = JSON.parse(rawData.toString());
    return data;
  }

  @Post()
  create(@Body() playerData) {
    return playerData;
  }

}
