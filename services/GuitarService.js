class GuitarService {
	constructor(db) {
		this.client = db.sequelize;
		this.Guitar = db.Guitar;
		this.Color = db.Color;
		this.Make = db.Make;
		this.Model = db.Model;
	}

	async create(year, price, brandId, modelId, colorId) {
		return this.Guitar.create({
			Year: year,
			Price: price,
			BrandId: brandId,
			ModelId: modelId,
			ColorId: colorId,
		});
	}

	async get() {
		return this.Guitar.findAll({
			where: {},
		});
	}

	async getOne(id) {
		return this.Guitar.findOne({
			where: {
				id: id
			},
		});
	}


	async getGuitarDetails(guitarId) {
		const guitar = await this.Guitar.findOne({
			where: {
				id: guitarId,
			},
		});
		return guitar;
	}
	// delete a spefic guitar with id
	async delete(id) {
		return this.Guitar.destroy({
			where: { id: id }
		})
	}

}
module.exports = GuitarService;
