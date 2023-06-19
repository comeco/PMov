import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MovementServiceBase } from "./base/movement.service.base";

@Injectable()
export class MovementService extends MovementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
