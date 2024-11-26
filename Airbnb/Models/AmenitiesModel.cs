using System.ComponentModel.DataAnnotations;

namespace Airbnb.Models
{
	public class AmenitiesModel
	{
		public int Id { get; set; }

		[MaxLength(60)]
		[Required]
		public string Name { get; set; } = string.Empty;

        public int CatCardId { get; set; }
        public CatCardModel? CatCard { get; set; }
    }
}
