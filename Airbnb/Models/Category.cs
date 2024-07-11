using System.ComponentModel.DataAnnotations;

namespace Airbnb.Models
{
	public class Category
	{
		public int Id { get; set; }

		[MaxLength(25)]
		public string Name { get; set; } = string.Empty;

		public ICollection<PlaceOfStay>? PlacesOfStay { get; set; }
	}
}
