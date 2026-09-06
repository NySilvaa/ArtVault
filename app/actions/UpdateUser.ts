"use server";

import { revalidatePath } from "next/cache";
import { graphqlRequest } from "../api/graphql/client";

interface UpdateUserResult {
  updateUser: { id: string; username: string };
}

export async function updateAccountConfig(data: {
  username?: string;
  email?: string;
  biography?: string;
}) {
  const result = await graphqlRequest<UpdateUserResult>(
    `
      mutation UpdateUser($username: String, $email: String, $biography: String) {
        updateUser(username: $username, email: $email, biography: $biography) {
          id
          username
        }
      }
    `,
    data,
    { requireAuth: true }
  );

  if (!result.success) {
    return { success: false, error: result.error };
  }

  revalidatePath("/Account");
  return { success: true, data: result.data.updateUser };
}

interface UpdateUserPhotosResult {
  updateUserPhotos: {
    id: string;
    profile_photo: string;
    complementary_img: string[];
  };
}

export async function updateUserPhotosAction(photos: string[]) {
  const result = await graphqlRequest<UpdateUserPhotosResult>(
    `
      mutation UpdateUserPhotos($photos: [String!]!) {
        updateUserPhotos(photos: $photos) {
          id
          profile_photo
          complementary_img
        }
      }
    `,
    { photos },
    { requireAuth: true }
  );

  if (!result.success) {
    return { success: false, error: result.error };
  }

  revalidatePath("/Account");
  return { success: true, data: result.data.updateUserPhotos };
}

interface GetDataUserResult {
  getDataUser: {
    id: string;
    username: string;
    biography?: string;
    profile_photo?: string;
    complementary_img?: string[];
  };
}

export async function getDataUser() {
  const result = await graphqlRequest<GetDataUserResult>(
    `
      query {
        getDataUser {
          id
          username
          biography
          profile_photo
          complementary_img
        }
      }
    `,
    {},
    { requireAuth: true }
  );

  if (!result.success) {
    console.error("Erro ao buscar dados do usuário:", result.error);
    return null;
  }

  return result.data.getDataUser;
}