using System.ComponentModel.DataAnnotations;

namespace Airbnb.Models
{
    public class Categories
    {
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; } = string.Empty;

        public ICollection<CatCard>? CatCards { get; set; }
    }
}
