export interface Animal {
  id: string;
  nome: string;
  especie: string;
  raca: string;
  idade: number;
  pet_dono_id: string;
}

export interface CriarAnimal {
  nome: string;
  especie: string;
  raca: string;
  idade: number;
  pet_dono_id: string;
}
