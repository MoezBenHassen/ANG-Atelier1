export class FournisseurTs {
    idFournisseur!: number
    code!: string
    libelle!: string
    constructor(id?: number, code?: string, label?: string) {
        this.idFournisseur = id || 0;
        this.code = code || "";
        this.libelle = label || "";
      }
}
