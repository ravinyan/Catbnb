using System.ComponentModel.DataAnnotations;

namespace Airbnb.Models
{
	public class Amenities
	{
		public int Id { get; set; }

		[MaxLength(60)]
		[Required]
		public string Name { get; set; } = string.Empty;

        //public ICollection<CatCard>? CatCards { get; set; }
    }
}
