import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("An error occurred while fetching cabins");
  }

  return data;
}

export async function createEditCabin(newCabin, id) {

const hasImageUrl = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replace("/", "");

  const imageURL = hasImageUrl ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let query = supabase.from("cabins")


  if(!id) query = 
 query.insert([{ ...newCabin, image: imageURL }])

  if (id) query = 
    query.update({ ...newCabin, image: imageURL }).eq("id", id);
   

    const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  const { storagError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storagError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storagError);
    throw new Error(
      "Image could not be uploaded and the cabin was not created"
    );
  }
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("An error occurred while fetching cabins");
  }

  return null;
}
