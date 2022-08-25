import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { NotificationResolverBase } from "./base/notification.resolver.base";
import { Notification } from "./base/Notification";
import { NotificationService } from "./notification.service";

@graphql.Resolver(() => Notification)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class NotificationResolver extends NotificationResolverBase {
  constructor(
    protected readonly service: NotificationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
