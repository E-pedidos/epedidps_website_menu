import { ReactNode } from "react";

export interface IUser {
  id: string;
  name: string;
  email: string;
  name_estabelecimento: string;
  tel_wpp: number;
  address: string;
  avatar: string;
  created_at: string;
  updated_at: string;
  franchise: string;
  role: string;
  avatar_url: string;
  category: Category
}

export interface Category {
  id: string;
  name: string;
  created_at: string;
  updated_at: any;
}

export interface ICard {
  id: string;
  name: string;
  description: string;
  isTrending: boolean;
  image: string;
  filialId: string;
  fcateId: string;
  valor: string;
  product_cost: string;
  ownerId: string;
  created_at: string;
  updated_at: string;
  attributes: any[];
  photo_url: string;
}

export interface IFoodCategory {
  id: string;
  name: string;
  items: ICard[];
}

export interface IMenu {
  title: string;
  children: ReactNode;
}

export interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export interface ICardOrder {
  id: string
  nameItemOrder: string
  valueItemOrder: number
  quantityItemOrder: number
}
 