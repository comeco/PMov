import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MovementService } from "./movement.service";
import { MovementControllerBase } from "./base/movement.controller.base";

@swagger.ApiTags("movements")
@common.Controller("movements")
export class MovementController extends MovementControllerBase {
  constructor(
    protected readonly service: MovementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
