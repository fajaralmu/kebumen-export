import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  images:string[] = [
    "no_brand_pot_sabut_kelapa_model_kerucut-_pot_bunga_anggrek_gantung_dan_tempel_full01_bqn28cvd.webp",
    "oem_pot_anggrek_sabut_kelapa_gantung_full00.webp",
    "oem_pot_bunga_anggrek_sabut_kelapa_best_seller_full01_b5jl2dtk.webp",
    "oem_pot_tempel-_pot_gantung-_pot_dinding_terbuat_dari_sabut_kelapa_full08_cfp7uz28.webp",
    "pot_cantik_pot_anggrek_sabut_kelapa_kerucut_kombinasi_full07_jlrdk0rt.webp",
    "pot_cantik_pot_anggrek_sabut_kelapa_kotak_full02_itug7spj.webp",
    "pot_papan_media_tempel_tanaman_anggrek_sabut_kelapa_pengganti_papan_pakis_full00.webp",
    "pot_pot_gantung_sabut_kelapa_kombinasi_ijuk_hitam_full00.webp",
    "umkm_pot_gantung_sabut_kelapa_anyam_full00.webp",
    "umkm_tali_sabut_kelapa_10m_full00.webp"
  ];

  getProducts() : Product[]
  {
    const products:Product[]  = [];
    for (let i = 0; i < this.images.length; i++) {
      const image = this.images[i];
      const name  = image.replace(".webp","").split("_").join(" ");
      let product:Product = Object.assign( new Product(), {
        imageName   : image,
        name        : name,
        price       : (1 + Math.floor(Math.random() * 101)) * 1000,
        description : `Desc ${name}`
      } );
      products.push(product);
    }
    return products.sort((a,b) => {
      return a.name < b.name ? 0 : 1
     } );
  }
}
