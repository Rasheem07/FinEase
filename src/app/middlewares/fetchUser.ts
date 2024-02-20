import jwt from "jsonwebtoken";
import { headers } from "next/headers";

export async function fetchUser() {
     // Get the token from headers
     const headersList = headers();
     const token = headersList.get("auth-token")
     
     if(!token){
       return Response.json({error: "auth-token header missing!"}, {status: 403})
     }
     // Verify and decode the token
     const secret = await JSON.stringify(process.env.JWT_secret);
     const payload = jwt.verify(token, secret) as {user: { id: string }};
     
     // Ensure that userID is valid
     if (!payload || !payload.user.id) {
       return Response.json({ error: "Missing UserID!" }, { status: 400 });
     }
     
     return payload.user.id as string;
}