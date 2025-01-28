using System.ComponentModel.DataAnnotations;

namespace Catbnb.Models
{
    public class PropertyType
    {
        public int Id { get; set; }

        [StringLength(10)]
        [Required]
        public string Name { get; set; } = string.Empty;
    }
}
