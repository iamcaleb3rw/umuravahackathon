import User from "../modals/user";
import connect from "../db";
export interface UserProps {
  id: string | null | undefined;
  first_name: string | null | undefined;
  last_name: string | null | undefined;
  email_addresses: { email_address: string }[] | null | undefined;
  image_url: string | null | undefined;
}


export const createOrUpdateUser = async ({
  id,
  first_name,
  last_name,
  email_addresses,
  image_url,
}: UserProps) => {
  try {
    await connect();
    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          email: email_addresses?[0]?.email_address,
          imageUrl: image_url,
        },
      },
      { upsert: true, new: true }
    );
    return user;
  } catch (err) {
    console.log("Could not create or update user", err);
  }
};

export const deleteUser = async (id: string) => {
  try {
    await connect();
    await User.findOneAndDelete({ clerkId: id });
    return true;
  } catch (err) {
    console.log("Could not delete user", err);
    return false;
  }
};
