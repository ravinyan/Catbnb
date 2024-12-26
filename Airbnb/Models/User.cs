using System.ComponentModel.DataAnnotations;

namespace Airbnb.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; } = string.Empty;

		[StringLength(50)]
		public string TimeOnCatbnb { get; set; } = string.Empty;

        [Required]
        [StringLength(100)]
        public string Title { get; set; } = string.Empty;

        public int ReviewId { get; set; }
        public ICollection<Reviews>? Reviews { get; set; }

        public int CatCardId { get; set; }
        public ICollection<CatCard>? CatCards { get; set; }
    }
}
