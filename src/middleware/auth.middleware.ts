import { ENUM_USER_ROLE } from "@/enums/user";
import { jwtHelpers } from "@/helpers/api/jwtHelpers";
import config from "@/helpers/config";

import httpStatus from "http-status";
import { Secret } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

// Middleware function
export async function auth(
  req: NextRequest,
  res: NextResponse,
  permittedRoles: ENUM_USER_ROLE[]
) {
  try {
    const token = req.headers.get("authorization");
    if (!token) {
      return new NextResponse(
        JSON.stringify({
          status: httpStatus.UNAUTHORIZED,
          message: "You are not authorized",
        }),
        { status: httpStatus.FORBIDDEN }
      );
    }

    const verifiedUser = await jwtHelpers.verifyToken(
      token,
      config.jwt.secret as Secret
    );

    // Check if the user has one of the permitted roles
    if (!permittedRoles.includes(verifiedUser.role)) {
      return new NextResponse(
        JSON.stringify({
          status: httpStatus.FORBIDDEN,
          message: "Forbidden",
        }),
        { status: httpStatus.FORBIDDEN }
      );
    }

    // Attach the verified user to the request (type assertion)
    (req as any).user = verifiedUser;

    return NextResponse.next();
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: httpStatus.INTERNAL_SERVER_ERROR,
        message: "Internal Server Error",
      }),
      { status: httpStatus.INTERNAL_SERVER_ERROR }
    );
  }
}
