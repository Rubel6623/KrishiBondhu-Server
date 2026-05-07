import { Role } from '../../generated/prisma/client';

export interface IAuthResponse {
    accessToken: string;
    user: {
        id: string;
        email: string;
        role: Role;
        name: string;
        avatar?: string | null;
    };
}