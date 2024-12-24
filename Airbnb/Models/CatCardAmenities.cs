using Airbnb.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace Catbnb.Models
{
	public class CatCardAmenities
	{
		[ForeignKey("AmenitiesId")]
		public int AmenitiesId { get; set; }
		[ForeignKey("CatCardId")]
		public int CatCardId { get; set; }

		public Amenities? Amenity { get; set; }
		public CatCard? CatCard { get; set; }
	}
}
