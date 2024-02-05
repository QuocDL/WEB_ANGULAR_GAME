export interface Product {
  id?: number;
  title?: string;
  thumbnail?: string;
  game_url?: string;
  short_description?: string;
  genre?: string;
  platform?: string;
  publisher?: string;
  developer?: string;
  release_date?: string;
  freetogame_profile_url: string;
  gameplay: string;
  system_requirements_medium:{
    medium: {
        System_Play: string,
        cpu: string,
        ram: string,
        card: string,
        card_ram: string,
        os: string,
        freedisk: string
   },
   playgood: {
        System_Play: string,
        cpu: string,
        ram: string,
        card: string,
        card_ram: string,
        os: string,
        freedisk: string
   }
    }
}
