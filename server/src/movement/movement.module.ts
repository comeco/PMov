import { Module } from "@nestjs/common";
import { MovementModuleBase } from "./base/movement.module.base";
import { MovementService } from "./movement.service";
import { MovementController } from "./movement.controller";
import { MovementResolver } from "./movement.resolver";

@Module({
  imports: [MovementModuleBase],
  controllers: [MovementController],
  providers: [MovementService, MovementResolver],
  exports: [MovementService],
})
export class MovementModule {}
