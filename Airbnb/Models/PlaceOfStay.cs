using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Airbnb.Models
{
	public class PlaceOfStay
	{
		public int Id { get; set; }

		public List<string>? Images { get; set; }

		[MaxLength(100)]
		public string Location { get; set; } = string.Empty;

		[MaxLength(70)]
		public string Description { get; set; } = string.Empty;

		[MaxLength(14)]
		public string DateAvailable { get; set; } = string.Empty;

		public int Price { get; set; }

		[Column(TypeName = "decimal(3,2)")]
		[Range(0, 5)]
		public decimal StarRating { get; set; }
	}
}